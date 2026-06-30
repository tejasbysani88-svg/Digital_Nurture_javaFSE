import java.util.ArrayList;

public class WeatherStation {

    private ArrayList<Observer> observers = new ArrayList<>();

    public void addObserver(Observer observer) {

        observers.add(observer);

    }

    public void notifyObservers(String weather) {

        for (Observer observer : observers) {

            observer.update(weather);

        }

    }

}