public class FinancialForecast {

    // Recursive Method
    public static double futureValue(double presentValue, double rate, int years) {

        // Base Case
        if (years == 0) {
            return presentValue;
        }

        // Recursive Case
        return (1 + rate) * futureValue(presentValue, rate, years - 1);
    }
}