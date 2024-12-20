const endpointUri=process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;

const getEmbeddings=async (data)=>{
    try {

        const response=await fetch(endpointUri,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'api-key':apiKey
            },
            body:JSON.stringify({
                input:JSON.stringify(data),
                model:"text-embedding-3-large"
            }),
        });

        let embedding;
        if(response.ok){
            const jsonResponse=await response.json();
            embedding=jsonResponse?.data[0]?.embedding;
            return embedding;
        }
        
    } catch (error) {
        console.log(error);
    }
}

module.exports=getEmbeddings;