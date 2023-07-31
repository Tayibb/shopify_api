import { useState, useEffect } from "react";
import { Card, TextContainer, Text } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import Products from "./Products";

export function ProductsCard() {
    // const emptyToastProps = { content: null };
    // const [isLoading, setIsLoading] = useState(true);
    // const [toastProps, setToastProps] = useState(emptyToastProps);
    const fetch = useAuthenticatedFetch();
    // const { t } = useTranslation();
    // const productsCount = 5;

    // const {
    //     data,
    //     refetch: refetchProductCount,
    //     isLoading: isLoadingCount,
    //     isRefetching: isRefetchingCount,
    // } = useAppQuery({
    //     url: "/api/products/count",
    //     reactQueryOptions: {
    //         onSuccess: () => {
    //             setIsLoading(false);
    //         },
    //     },
    // });

    // const toastMarkup = toastProps.content && !isRefetchingCount && <Toast {...toastProps} onDismiss={() => setToastProps(emptyToastProps)} />;

    // const handlePopulate = async () => {
    //     setIsLoading(true);
    //     const response = await fetch("/api/products/create");

    //     if (response.ok) {
    //         await refetchProductCount();
    //         setToastProps({
    //             content: t("ProductsCard.productsCreatedToast", {
    //                 count: productsCount,
    //             }),
    //         });
    //     } else {
    //         setIsLoading(false);
    //         setToastProps({
    //             content: t("ProductsCard.errorCreatingProductsToast"),
    //             error: true,
    //         });
    //     }
    // };

    // --------------------------- Products --------------------------
    const fetchProducts = async () => {
        try {
            const response = await fetch("/api/products/8456286961944");
            if (!response.ok) {
                throw new Error("Failed to fetch data.");
            }
            const data = await response.json();
            console.log(data, "data2");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // --------------------------- Collections --------------------------
    const fetchCollection = async () => {
        try {
            const response = await fetch("/api/collections/453073273112");
            console.log("Collection");
            console.log(await response.json());
        } catch (err) {
            console.log(err);
        }
    };

    fetchCollection();

    // --------------------------- Orders ------------------------------
    const fetchOrders = async () => {
        try {
            const response = await fetch("/api/orders");
            console.log("Orders");
            console.log(await response.json());
        } catch (err) {
            console.log(err);
        }
    };

    fetchOrders();

    // --------------------------- Customers ------------------------------
    const fetchCustomers = async () => {
        try {
            const response = await fetch("/api/customers");
            console.log("Customers");
            console.log(await response.json());
        } catch (err) {
            console.log(err);
        }
    };

    fetchCustomers();
    return (
        <>
            {/* {toastMarkup}
            <Card
                title={t("ProductsCard.title")}
                sectioned
                primaryFooterAction={{
                    content: t("ProductsCard.populateProductsButton", {
                        count: productsCount,
                    }),
                    onAction: handlePopulate,
                    loading: isLoading,
                }}
            >
                <TextContainer spacing="loose">
                    <p>{t("ProductsCard.description")}</p>
                    <Text as="h4" variant="headingMd">
                        {t("ProductsCard.totalProductsHeading")}
                        <Text variant="bodyMd" as="p" fontWeight="semibold">
                            {isLoadingCount ? "-" : data.count}
                        </Text>
                    </Text>
                </TextContainer>
            </Card> */}
            <Products />
        </>
    );
}
