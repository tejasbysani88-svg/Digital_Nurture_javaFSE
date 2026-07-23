-- Scenario 3: Transfer funds between two accounts with balance check

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_SourceAccountID IN Accounts.AccountID%TYPE,
    p_TargetAccountID IN Accounts.AccountID%TYPE,
    p_Amount          IN NUMBER
) AS
    v_SourceBalance Accounts.Balance%TYPE;
BEGIN
    -- Check source account balance
    SELECT Balance INTO v_SourceBalance
    FROM Accounts
    WHERE AccountID = p_SourceAccountID;

    IF v_SourceBalance < p_Amount THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance in source account ' || p_SourceAccountID);
    ELSE
        -- Deduct from source account
        UPDATE Accounts
        SET Balance = Balance - p_Amount
        WHERE AccountID = p_SourceAccountID;

        -- Add to target account
        UPDATE Accounts
        SET Balance = Balance + p_Amount
        WHERE AccountID = p_TargetAccountID;

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer of $' || p_Amount ||
                             ' from Account ' || p_SourceAccountID ||
                             ' to Account ' || p_TargetAccountID || ' successful.');
    END IF;
END TransferFunds;
/