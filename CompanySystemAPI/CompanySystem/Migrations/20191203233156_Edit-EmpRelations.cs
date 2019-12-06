using Microsoft.EntityFrameworkCore.Migrations;

namespace CompanySystem.Migrations
{
    public partial class EditEmpRelations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Departments_DepartmentID",
                table: "Employees");

            migrationBuilder.DropIndex(
                name: "IX_Employees_DepartmentID",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "DepartmentID",
                table: "Employees");

            migrationBuilder.AddColumn<int>(
                name: "EmployeeID",
                table: "Departments",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Departments_EmployeeID",
                table: "Departments",
                column: "EmployeeID");

            migrationBuilder.AddForeignKey(
                name: "FK_Departments_Employees_EmployeeID",
                table: "Departments",
                column: "EmployeeID",
                principalTable: "Employees",
                principalColumn: "EmployeeID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Departments_Employees_EmployeeID",
                table: "Departments");

            migrationBuilder.DropIndex(
                name: "IX_Departments_EmployeeID",
                table: "Departments");

            migrationBuilder.DropColumn(
                name: "EmployeeID",
                table: "Departments");

            migrationBuilder.AddColumn<int>(
                name: "DepartmentID",
                table: "Employees",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Employees_DepartmentID",
                table: "Employees",
                column: "DepartmentID");

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Departments_DepartmentID",
                table: "Employees",
                column: "DepartmentID",
                principalTable: "Departments",
                principalColumn: "DepartmentID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
