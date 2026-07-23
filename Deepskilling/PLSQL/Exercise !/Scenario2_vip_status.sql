-- Scenario 2: Set IsVIP flag to TRUE for customers with balance over $10,000

DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Balance
        FROM Customers;

BEGIN
    FOR rec IN c_customers LOOP
        IF rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = TRUE
            WHERE CustomerID = rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Customer ID: ' || rec.CustomerID ||
                                 ' | Balance: $' || rec.Balance ||
                                 ' | Promoted to VIP.');
        END IF;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('VIP status update completed.');
END;
/