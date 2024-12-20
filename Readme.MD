<h1>Real-Time Product Search using Vector Embeddings and Cosine Similarity</h1>

<p>
This project uses <strong>MySQL-compatible SingleStore</strong> as the database to store product data and their corresponding <strong>vector embeddings</strong> in the form of BLOBs. The backend is built using <strong>Node.js</strong> to handle API requests and interact with the database. I have utilized <strong>Sequelize</strong> as the ORM since it supports MySQL, making database interaction easier and more efficient.
</p>

<h2>Tech Stack</h2>
<ul>
    <li><strong>Backend:</strong> Node.js</li>
    <li><strong>Database:</strong> SingleStore (MySQL compatible)</li>
    <li><strong>ORM:</strong> Sequelize</li>
    <li><strong>Embedding Model:</strong> Azure OpenAI text-embedding-3-large</li>
    <li><strong>Similarity Algorithm:</strong> Cosine Similarity (dot product)</li>
</ul>

<h2>How It Works</h2>
<p>
The project employs Azure's OpenAI <strong>text-embedding-3-large</strong> model to generate vector embeddings for the product descriptions. The vector embeddings are stored in SingleStore as BLOB data. 
</p>

<p>
When a user performs a search, the system calculates the <strong>dot product</strong> between the vector embedding of the user's search query and the product embeddings stored in the database. This uses <strong>cosine similarity</strong>, which is a measure of similarity between two vectors. The dot product of two vectors reflects how closely related or similar the vectors are. Based on the highest similarity scores, the top 5 most similar products are retrieved and sent as a response to the user.
</p>

<h2>Vector Embeddings and RAG (Retrieval-Augmented Generation)</h2>
<p>
Vector embeddings are a way of converting text data into numerical format, representing words, phrases, or entire documents as vectors (arrays of numbers). This makes it easier to perform similarity comparisons between pieces of text. In this project, the vector embeddings of product descriptions are compared to the query's embedding using cosine similarity to determine the top 5 relevant products.
</p>

<p>
<strong>Cosine similarity</strong> is a metric used to measure how similar two vectors are, calculated by taking the dot product of the vectors and dividing it by the product of their magnitudes. A high cosine similarity value indicates that the two vectors (i.e., the query and the product) are very similar in meaning.
</p>

<p>
<strong>RAG</strong> stands for Retrieval-Augmented Generation, which combines traditional retrieval-based approaches (like similarity search) with generation-based methods. In this system, retrieval is used to find similar data points (products) based on vector embeddings, and this information can be augmented or generated as part of the final response.
</p>

<h2>Backend Implementation</h2>
<p>
The backend is built using Node.js, handling the API requests and interacting with the SingleStore database using Sequelize ORM. When a user enters a search query, the query is processed, and the system calculates the cosine similarity between the user's query vector and the stored product vectors.
</p>

<p>
The backend uses the following steps:
<ul>
    <li>Accept a search query from the user</li>
    <li>Generate a vector embedding for the query using Azure's OpenAI text-embedding-3-large</li>
    <li>Query the SingleStore database, comparing the query's vector with the product vectors using the dot product for cosine similarity</li>
    <li>Return the top 5 products with the highest similarity scores</li>
</ul>
</p>

<h2>Usage</h2>
<p>
To use the system, simply provide a search query through the API, and the backend will return the top 5 products most relevant to your input. The results are ranked based on the similarity between the query embedding and the stored product embeddings.
</p>

<h2>Conclusion</h2>
<p>
This project demonstrates how modern techniques like vector embeddings and cosine similarity can be used to enhance search functionality by providing more contextually relevant results. The use of Node.js as the backend framework and SingleStore as a MySQL-compatible database allows for seamless handling of large-scale data while leveraging the power of Azure OpenAI's embedding models for efficient vector-based search.
</p>
