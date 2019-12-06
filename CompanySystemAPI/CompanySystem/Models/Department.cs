using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CompanySystem.Models
{
    public class Department
    {
        [Key]
        //DepartmentID , DepartmentName , DepartmentCode
        public int DepartmentID { get; set; }
        public string DepartmentName { get; set; }
        public string DepartmentCode { get; set; }


    }
}
