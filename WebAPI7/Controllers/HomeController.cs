using DocumentFormat.OpenXml.Spreadsheet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebAPI7.Controllers
{
    public class HomeController : Controller
    {
        public  ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
