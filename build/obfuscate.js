const UglifyJS = require('uglify-js');
const fs = require('fs');
const path = require('path');

// Liste des fichiers à obfusquer
const files = [
    '../pricing.js',
    '../theme.js'
];

// Options d'obfuscation avancées
const options = {
    mangle: {
        toplevel: true,
        properties: true, // Mangle les noms de propriétés
        reserved: ['document', 'window', 'console'] // Préserver ces noms
    },
    compress: {
        dead_code: true,
        global_defs: {
            DEBUG: false
        },
        passes: 5,
        unsafe: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        pure_getters: true,
        drop_console: true, // Supprimer les console.log
        sequences: true, // Combiner les expressions avec des virgules
        booleans: true,
        collapse_vars: true,
        reduce_vars: true
    },
    output: {
        beautify: false,
        preamble: "/* Code obfuscated - DevPartner */",
        max_line_len: 500, // Très longue ligne
        semicolons: true,
        comments: false // Supprimer tous les commentaires
    }
};

// Obfusquer chaque fichier
files.forEach(file => {
    const filePath = path.join(__dirname, file);
    const code = fs.readFileSync(filePath, 'utf8');
    const result = UglifyJS.minify(code, options);

    if (result.error) {
        console.error(`Error in ${file}:`, result.error);
        return;
    }

    // Créer le fichier de sortie
    const outputPath = filePath.replace('.js', '.min.js');
    fs.writeFileSync(outputPath, result.code);
    console.log(`Obfuscated ${file} -> ${outputPath}`);
}); 