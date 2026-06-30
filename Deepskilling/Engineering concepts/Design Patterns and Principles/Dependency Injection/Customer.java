public class Customer {

    private MessageService messageService;

    public Customer(MessageService messageService) {

        this.messageService = messageService;

    }

    public void send() {

        messageService.sendMessage();

    }

}