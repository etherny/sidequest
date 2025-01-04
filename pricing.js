// Constants (hidden in code)
const HOURLY_RATE = 100; // Hourly rate in USD
const HOURS_PER_VIEW = 8; // Work hours per view
const INITIAL_COST_PER_VISITOR = 3; // Cost per visitor during development phase
const FINAL_COST_PER_VISITOR = 1.5; // Cost per visitor after development

document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const viewCountSlider = document.getElementById('pageCount');
    const visitorsCountSlider = document.getElementById('visitorsCount');
    const viewCountValue = document.getElementById('pageCountValue');
    const visitorsCountValue = document.getElementById('visitorsCountValue');
    const developmentCost = document.getElementById('developmentCost');
    const monthlyInitialCost = document.getElementById('monthlyInitialCost');
    const monthlyFinalCost = document.getElementById('monthlyFinalCost');
    const paybackPeriod = document.getElementById('paybackPeriod');
    const viewsInput = document.getElementById('viewsInput');
    const visitorsInput = document.getElementById('visitorsInput');
    const developmentCostInput = document.getElementById('developmentCostInput');
    const monthlyCostInput = document.getElementById('monthlyCostInput');

    // Main calculation function
    function updateCalculations() {
        const views = parseInt(viewCountSlider.value);
        const visitors = parseInt(visitorsCountSlider.value);

        // Calculate development cost
        const devCost = views * HOURS_PER_VIEW * HOURLY_RATE;
        
        // Calculate monthly costs
        const monthlyInitial = visitors * INITIAL_COST_PER_VISITOR;
        const monthlyFinal = visitors * FINAL_COST_PER_VISITOR;
        
        // Calculate payback period
        const paybackMonths = Math.ceil(devCost / monthlyInitial);

        // Update interface
        developmentCost.textContent = `$${devCost.toLocaleString()}`;
        monthlyInitialCost.textContent = `$${monthlyInitial.toLocaleString()}`;
        monthlyFinalCost.textContent = `$${monthlyFinal.toLocaleString()}`;
        paybackPeriod.textContent = `${paybackMonths} month${paybackMonths > 1 ? 's' : ''}`;
        
        // Update displayed values
        viewCountValue.textContent = `${views} view${views > 1 ? 's' : ''}`;
        visitorsCountValue.textContent = `${visitors.toLocaleString()} visitor${visitors > 1 ? 's' : ''}`;

        // Update form inputs if they exist
        if (viewsInput) viewsInput.value = `${views} views`;
        if (visitorsInput) visitorsInput.value = `${visitors.toLocaleString()} monthly visitors`;
        if (developmentCostInput) developmentCostInput.value = `Development Cost: $${devCost.toLocaleString()}`;
        if (monthlyCostInput) monthlyCostInput.value = `Initial Monthly Cost: $${monthlyInitial.toLocaleString()}`;
    }

    // Event listeners
    viewCountSlider.addEventListener('input', updateCalculations);
    visitorsCountSlider.addEventListener('input', updateCalculations);

    // Initial calculation
    updateCalculations();
}); 