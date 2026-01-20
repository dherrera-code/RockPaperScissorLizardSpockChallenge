using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public class CPUResponse
    {
        public string CPUsResponse()
        {
            int randNum = Random.Shared.Next(1,6);
            switch (randNum)
            {
                case 1:
                return "Rock";
                case 2:
                return "Paper";
                case 3: 
                return "Scissors";
                case 4:
                return "Lizard";
                default:
                return "Spock";
            }
        }
    }
}