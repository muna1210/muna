let postData = [];

async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    postData = data;
}

export default async function handler(req, res){

    if (postData.length ===0){
        await fetchData();
    }

    if (req.method === "GET"){

        res.status(200).json(postsData);
    } else if (req.method === "POST"){

        const newPost = req.body;
        postsData.push(newPost);
        res.status(201).json(newPost);
    } else {

        res.status(405).end();
    }
}