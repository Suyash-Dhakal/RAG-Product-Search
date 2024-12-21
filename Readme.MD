<h1>Real-Time Product Search using Vector Embeddings and Dot Product-Based Vector Similarity</h1>

<p>
This project implements a <strong>semantic recommendation system</strong> using <strong>MySQL-compatible SingleStore</strong> as the database to store product data and their corresponding <strong>vector embeddings</strong> in the form of BLOBs. The backend is built using <strong>Node.js</strong> to handle API requests and interact with the database. I have utilized <strong>Sequelize</strong> as the ORM since it supports MySQL, making database interaction efficient and structured.
</p>

<h2>Tech Stack</h2>
<ul>
    <li><strong>Backend:</strong> Node.js</li>
    <li><strong>Database:</strong> SingleStore (MySQL compatible)</li>
    <li><strong>ORM:</strong> Sequelize</li>
    <li><strong>Embedding Model:</strong> Azure OpenAI text-embedding-3-large</li>
    <li><strong>Similarity Algorithm:</strong> Dot Product-Based Vector Similarity</li>
</ul>

<h2>How It Works</h2>
<p>
The project leverages Azure's OpenAI <strong>text-embedding-3-large</strong> model to generate vector embeddings for the product descriptions. These embeddings capture the semantic meaning of the product details and are stored in SingleStore as BLOB data. 
</p>

<p>
When a user performs a search, the system calculates the <strong>dot product</strong> between the vector embedding of the user's search query and the product embeddings stored in the database. This dot product serves as the basis for ranking the similarity between the vectors. The system retrieves the top 5 products with the highest similarity scores and sends them back as a response.
</p>

<h2>Semantic Search vs. Retrieval-Augmented Generation (RAG)</h2>
<p>
Vector embeddings are powerful tools for representing text data numerically, enabling effective similarity comparisons. In this project, product descriptions are transformed into vector embeddings and compared with the user's query embedding to determine the most relevant products based on vector similarity. This approach is suited for semantic search and recommendation systems.
</p>

<p>
Unlike <strong>Retrieval-Augmented Generation (RAG)</strong>, which combines retrieval with natural language generation, this project focuses solely on retrieval. The retrieved products are ranked and returned directly without generating additional textual content, keeping the system straightforward and efficient.
</p>

<h2>Backend Implementation</h2>
<p>
The backend is implemented in Node.js, managing API endpoints and database interactions using Sequelize ORM. The key steps in the backend workflow are:
</p>
<ul>
    <li>Receive a search query from the user</li>
    <li>Generate a vector embedding for the query using Azure's OpenAI text-embedding-3-large</li>
    <li>Query the SingleStore database to calculate the similarity between the query vector and product vectors using the dot product</li>
    <li>Return the top 5 products with the highest similarity scores</li>
</ul>

<h2>Usage</h2>
<p>
To utilize the system, send a search query via the API. The backend will process the query, calculate similarities, and return the top 5 products most relevant to your input. The results are ranked based on vector similarity, providing contextually accurate recommendations.
</p>

<h2>Conclusion</h2>
<p>
This project demonstrates how vector embeddings and dot product-based vector similarity can be effectively used to enhance search and recommendation functionalities. Azure OpenAI's embedding models further empower the application with accurate semantic understanding, making it a practical solution for real-time product search.
</p>
