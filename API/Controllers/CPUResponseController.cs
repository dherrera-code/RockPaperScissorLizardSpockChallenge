using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Services;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CPUResponseController : ControllerBase
    {
        private readonly CPUResponse _response;
        public CPUResponseController(CPUResponse response)
        {
            _response = response;
        }
        [HttpGet]
        public string GetResponse()
        {
            return _response.CPUsResponse();
        }
        //* https://herrerahostingdh-ayf7fhbzg6fdgvdr.westus3-01.azurewebsites.net/api/CPUResponse
    }
}