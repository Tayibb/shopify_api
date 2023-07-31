import React, { useEffect, useState } from "react";
import { Page, LegacyCard } from "@shopify/polaris";
import DataTable from "react-data-table-component";
import { useAuthenticatedFetch } from "../hooks";

const Products = () => {
    const [productData, setProductData] = useState([]);
    const fetch = useAuthenticatedFetch();

    const fetchProducts = async () => {
        try {
            const response = await fetch("/api/products/8456286961944");
            if (!response.ok) {
                throw new Error("Failed to fetch data.");
            }
            const data = await response.json();
            console.log("Data:", data.data);
            data.data.forEach((items) => {
                console.log(items.title);
            });
            setProductData(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
        },
        {
            name: "Status",
            selector: (row) => row.status,
        },
        {
            name: "Created At",
            selector: (row) => row.created_at,
        },
        {
            name: "Updated At",
            selector: (row) => row.updated_at,
        },
        {
            name: "Vendor",
            selector: (row) => row.vendor,
        },
    ];

    return (
        <>
            <Page>
                <LegacyCard>
                    <DataTable title="Products API Data" columns={columns} data={productData} selectableRows striped />
                </LegacyCard>
            </Page>
        </>
    );
};

export default Products;

// import React, { useEffect, useState } from "react";
// import { Page, DataTable, LegacyCard } from "@shopify/polaris";
// import { useAuthenticatedFetch } from "../hooks";

// const Products = () => {
//     const [productData, setProductData] = useState([]);
//     const fetch = useAuthenticatedFetch();
//     // --------------------------- Products --------------------------
//     const fetchProducts = async () => {
//         try {
//             const response = await fetch("/api/products/8456286961944");
//             if (!response.ok) {
//                 throw new Error("Failed to fetch data.");
//             }
//             const data = await response.json();
//             console.log("Data:", data.data.id);
//             setProductData(data);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     useEffect(() => {
//         fetchProducts();
//     }, []);
//     console.log(productData, "productdata");
//     return (
//         <>
//             <LegacyCard title="Products">
//                 {productData?.data?.length > 0 ? (
//                     <table style={{ padding: "10px", width: "100%" }}>
//                         <thead>
//                             <tr>
//                                 <th style={{ textAlign: "left", padding: "10px" }}>Title</th>
//                                 <th style={{ textAlign: "left", padding: "10px" }}>Handle</th>
//                                 <th style={{ textAlign: "left", padding: "10px" }}>Status</th>
//                                 <th style={{ textAlign: "left", padding: "10px" }}>Created At</th>
//                                 <th style={{ textAlign: "left", padding: "10px" }}>Vendor</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {productData?.data?.map((product) => {
//                                 console.log("Product:", product); // Add this console log
//                                 return (
//                                     <tr key={product?.id}>
//                                         <td style={{ padding: "10px" }}>{product?.title}</td>
//                                         <td style={{ padding: "10px" }}>{product?.handle}</td>
//                                         <td style={{ padding: "10px" }}>{product?.status}</td>
//                                         <td style={{ padding: "10px" }}>{product?.created_at}</td>
//                                         <td style={{ padding: "10px" }}>{product?.vendor}</td>
//                                     </tr>
//                                 );
//                             })}
//                         </tbody>
//                     </table>
//                 ) : (
//                     <p>No product data available.</p>
//                 )}
//             </LegacyCard>
//         </>
//     );
// };

// export default Products;
