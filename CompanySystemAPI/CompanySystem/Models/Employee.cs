using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CompanySystem.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public float EmployeeSalary { get; set; }
        public DateTime EmployeeBirthDate { get; set; }
        public string EmployeeGender { get; set; }

        public ICollection<Department> deptid { get; set; }

    }
}
