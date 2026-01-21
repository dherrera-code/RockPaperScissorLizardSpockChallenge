// alert("please work!")
const apiLink = "https://herrerahostingdh-ayf7fhbzg6fdgvdr.westus3-01.azurewebsites.net/api/CPUResponse";



async function getCPUAnswer() {
    const response = await fetch(apiLink);
    const data = await response.text();
    console.log(data);
    return data;
    
}
getCPUAnswer();