public class Main {

    public static void main(String[] args) {

        WeatherStation station = new WeatherStation();

        Observer mobile = new MobileDisplay();
        Observer tv = new TVDisplay();

        station.addObserver(mobile);
        station.addObserver(tv);

        System.out.println("Weather Changed");

        station.notifyObservers("Rainy");

    }

}