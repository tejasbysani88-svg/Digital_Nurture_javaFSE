public class TVDisplay implements Observer {

    @Override
    public void update(String weather) {

        System.out.println("TV Display : Weather Updated -> " + weather);

    }

}