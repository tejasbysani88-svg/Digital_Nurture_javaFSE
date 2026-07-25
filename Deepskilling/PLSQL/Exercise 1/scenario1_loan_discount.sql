-- Scenario 1: Apply 1% discount on loan interest rate for customers above 60 years old

DECLARE
    CURSOR c_customers IS
        SELECT c.CustomerID, c.Age, l.LoanID, l.InterestRate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID;

    v_newRate Loans.InterestRate%TYPE;

BEGIN
    FOR rec IN c_customers LOOP
        IF rec.Age > 60 THEN
            v_newRate := rec.InterestRate - 1;

            UPDATE Loans
            SET InterestRate = v_newRate
            WHERE LoanID = rec.LoanID;

            DBMS_OUTPUT.PUT_LINE('Customer ID: ' || rec.CustomerID ||
                                 ' | Age: ' || rec.Age ||
                                 ' | New Interest Rate: ' || v_newRate || '%');
        END IF;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Loan interest rate discount applied successfully.');
END;
/