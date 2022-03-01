import { EmployeeList } from "./Employees/EmployeeList"
import { LocationList } from "./Locations/LocationList"
import { ProductList } from "./Products/ProductList"
import { ProductTypeList } from "./ProductTypes/ProductTypeList"
import { PurchaseList } from "./Purchases/PurchaseList"

export const KandyKorner = () => {
    return(
        <>
    <article>
        <section>
            <h2>Locations</h2>
            <LocationList />

            <h2>Products</h2>
            <ProductList />

            <h2>Product Types</h2>
            <ProductTypeList />

            <h2>Purchases</h2>
            <PurchaseList />

            <h2>Employees</h2>
            <EmployeeList />



        </section>
    </article>
    </>
    )
}

