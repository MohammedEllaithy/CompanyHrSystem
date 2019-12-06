﻿// <auto-generated />
using System;
using CompanySystem.SystemDB;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CompanySystem.Migrations
{
    [DbContext(typeof(SystemDataContext))]
    [Migration("20191203235648_Edit-EmpRelations3nd")]
    partial class EditEmpRelations3nd
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099");

            modelBuilder.Entity("CompanySystem.Models.Department", b =>
                {
                    b.Property<int>("DepartmentID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("DepartmentCode");

                    b.Property<string>("DepartmentName");

                    b.Property<int?>("EmployeeID");

                    b.HasKey("DepartmentID");

                    b.HasIndex("EmployeeID");

                    b.ToTable("Departments");
                });

            modelBuilder.Entity("CompanySystem.Models.Employee", b =>
                {
                    b.Property<int>("EmployeeID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("EmployeeBirthDate");

                    b.Property<string>("EmployeeGender");

                    b.Property<string>("EmployeeName");

                    b.Property<float>("EmployeeSalary");

                    b.HasKey("EmployeeID");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("CompanySystem.Models.Department", b =>
                {
                    b.HasOne("CompanySystem.Models.Employee")
                        .WithMany("deptid")
                        .HasForeignKey("EmployeeID");
                });
#pragma warning restore 612, 618
        }
    }
}
