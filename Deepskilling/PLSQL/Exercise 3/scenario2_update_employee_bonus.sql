-- Scenario 2: Update employee salary by adding a bonus percentage for a given department

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_DepartmentID IN Employees.DepartmentID%TYPE,
    p_BonusPercent  IN NUMBER
) AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_BonusPercent / 100)
    WHERE DepartmentID = p_DepartmentID;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Bonus of ' || p_BonusPercent || '% applied to department ' || p_DepartmentID);
END UpdateEmployeeBonus;
/