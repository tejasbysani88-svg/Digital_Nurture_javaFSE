-- Scenario 3: Print reminder for customers whose loans are due within the next 30 days

DECLARE
    CURSOR c_loans IS
        SELECT l.LoanID, l.CustomerID, c.Name, l.DueDate
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR rec IN c_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || rec.Name ||
                             ', your Loan ID ' || rec.LoanID ||
                             ' is due on ' || TO_CHAR(rec.DueDate, 'DD-MON-YYYY') ||
                             '. Please ensure timely payment.');
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('Loan reminders processed.');
END;
/
