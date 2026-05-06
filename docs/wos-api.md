# WOS (Web Ordering System) API Reference

Welcome to the WOS API reference documentation. This system handles storefront operations, product catalog definitions, dynamic pricing calculations, and order management.

---

## 🔑 Admin - API Keys Configuration
*Endpoints used to manage machine-to-machine tokens and third-party API integrations.*

| Method | Endpoint | Controller Action | Purpose / Description |
| :--- | :--- | :--- | :--- |
| **GET\|HEAD** | `/admin/api-keys` | `ApiKeyController@index` | List all registered API keys. |
| **POST** | `/admin/api-keys` | `ApiKeyController@store` | Generate a new API key/token. |
| **GET\|HEAD** | `/admin/api-keys/create` | `ApiKeyController@create` | Render form/rules for key creation. |
| **PUT\|PATCH**| `/admin/api-keys/{api_key}` | `ApiKeyController@update` | Update metadata or permissions of an API key. |
| **DELETE** | `/admin/api-keys/{api_key}` | `ApiKeyController@destroy` | Revoke/Delete an API key immediately. |
| **GET\|HEAD** | `/admin/api-keys/{api_key}/edit` | `ApiKeyController@edit` | Edit form data for an existing key. |

---

## 🏷️ Catalog & Storefront Data
*Public or authenticated endpoints to pull categories, store configurations, and localized metadata.*

| Method | Endpoint | Controller Action | Purpose / Description |
| :--- | :--- | :--- | :--- |
| **GET\|HEAD** | `/api/v1/stores/current` | `StoreController@getCurrentStore` | Fetch active store settings, operational hours, and configurations. |
| **GET\|HEAD** | `/api/v1/categories` | `CategoryController@index` | Fetch the main product category tree. |
| **GET\|HEAD** | `/api/v1/categories/{category}`| `CategoryController@show` | Get detailed information for a single product category. |
| **POST** | `/api/v1/customers/states` | `CustomerController@getStatesByCountry`| Dynamic dropdown utility to fetch states based on selected country. |
| **POST** | `/api/v1/customers/cities` | `CustomerController@getCitiesByStates` | Dynamic dropdown utility to fetch cities based on selected state. |

---

## 📦 Products & Dynamic Pricing Calculators
*The core pricing engine. Handles variable parameters for customized print items like posters, stickers, and books.*

| Method | Endpoint | Controller Action | Purpose / Description |
| :--- | :--- | :--- | :--- |
| **GET\|HEAD** | `/api/v1/products` | `ProductController@index` | List all available base products. |
| **GET\|HEAD** | `/api/v1/products/{product}` | `ProductController@show` | Fetch core details for a single product. |
| **POST** | `/api/v1/products/{product}/fields`| `ProductController@showProductFields` | Retrieve dynamic form fields required for a specific product layout. |
| **POST** | `/api/v1/products/{product}/calculate`| `ProductController@calculate` | Generic handler to estimate pricing based on input properties. |
| **POST** | `/api/v1/products/{product}/optional-charges`| `ProductController@availableOptionalCharges` | Fetch extra add-on costs (e.g., custom lamination, express processing). |
| 📐 **POST** | `/api/v1/products/life-size-standee/calculate`| `ProductController@lifeSizeStandeeCalculate` | Specialized dimensions calculator for custom-cut board mockups. |
| 📐 **GET\|HEAD**| `/api/v1/products/life-size-standee/fields`| `ProductController@lifeSizeStandeeFields` | Fields configuration blueprint for life-size standees. |
| 📐 **POST** | `/api/v1/products/posters/optional-charges`| `ProductController@posterOptionalCharges` | Calculate modular finishing costs specifically for posters. |
| 📐 **POST** | `/api/v1/products/saddle-stitch/calculate`| `ProductController@saddleStitchCalculate` | Complex booklet calculator (calculates based on page counts & bindings). |
| 📐 **GET\|HEAD**| `/api/v1/products/saddle-stitch/fields`| `ProductController@saddleStitchFields` | Fields configuration blueprint for booklet binding options. |
| 📐 **POST** | `/api/v1/products/sticker/calculate`| `ProductController@stickerCalculate`| Specialized calculator handling square inches, material type, and die-cuts. |

---

## 🧱 Sub-Products Attributes
*Handles fallback inventory matrices or secondary stock units mapped under complex products.*

| Method | Endpoint | Controller Action | Purpose / Description |
| :--- | :--- | :--- | :--- |
| **GET\|HEAD** | `/api/v1/sub-products` | `SubProductController@index` | List all child sub-products variants. |
| **GET\|HEAD** | `/api/v1/sub-products/{sub_product}`| `SubProductController@show` | View details of a specific variant. |
| **GET\|HEAD** | `/api/v1/sub-product-prices` | `SubProductPriceController@index` | Get the global price listing matrix for sub-products. |
| **GET\|HEAD** | `/api/v1/sub-product-prices/{sub_product_price}`| `SubProductPriceController@show` | Fetch concrete pricing entries for a single variation record. |

---

## 🛒 Orders, Checkout & Marketing Telemetry
*Handles workflows after a user completes a calculation and moves to check out.*

| Method | Endpoint | Controller Action | Purpose / Description |
| :--- | :--- | :--- | :--- |
| **GET\|HEAD** | `/api/v1/order-types` | `OrderTypeController@index` | List order classifications (e.g., Self-Pickup, Delivery, B2B). |
| **GET\|HEAD** | `/api/v1/payment-methods` | `PaymentMethodController@index` | Fetch enabled payment gateways (e.g., Credit Card, FPX, PayPal). |
| **GET\|HEAD** | `/api/v1/payment-statuses`| `PaymentStatusController@index` | Status lookups (e.g., Pending, Paid, Refunded, Voided). |
| **GET\|HEAD** | `/api/v1/statuses` | `StatusController@index` | Overall order workflow statuses (e.g., Processing, Printing, Dispatched). |
| **GET\|HEAD** | `/api/v1/orders` | `OrderController@index` | Get user order history logs. |
| **GET\|HEAD** | `/api/v1/orders/{order}` | `OrderController@show` | Detailed summary tracker for an explicit Order ID. |
| 📊 **GET\|HEAD**| `/api/v1/marketing/orders_total` | `MarketingApiController@ordersTotal`| Analytics telemetry monitoring order counts/revenue for tracking conversion metrics. |