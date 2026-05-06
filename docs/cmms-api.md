# ACCEA API Reference Guide

Welcome to the internal CMMS API reference documentation. This layout outlines all available endpoints, sorted by modules.

---

## 🎟️ Admin - Coupon Campaigns
*Manages the top-level marketing campaigns under which individual coupons are issued.*

| Method | Endpoint | Named Route | Purpose / Description |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/admins/coupon-campaigns` | `coupon-campaigns.index` | List all coupon campaigns with pagination/filters. |
| **POST** | `/api/v1/admins/coupon-campaigns/create` | `coupon-campaigns.create` | Create a new coupon marketing campaign. |
| **PUT** | `/api/v1/admins/coupon-campaigns/{campaign}` | `coupon-campaigns.update` | Update configuration details of a specific campaign. |
| **POST** | `/api/v1/admins/coupon-campaigns/{campaign}/activate` | `coupon-campaigns.activate` | Turn a campaign live so its coupons can be claimed. |
| **POST** | `/api/v1/admins/coupon-campaigns/{campaign}/deactivate` | `coupon-campaigns.deactivate` | Pause or end a campaign prematurely. |
| **GET** | `/api/v1/admins/coupon-campaigns/{campaign}/statistics` | `coupon-campaigns.statistics` | Fetch performance data (e.g., total claimed, redemption rate). |

---

## 🎁 Admin - Coupon Management
*Granular control over unique coupon instances, assignments, and structural validations.*

| Method | Endpoint | Named Route | Purpose / Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/v1/admins/coupons` | `coupons.index` | Search, filter, and fetch a collection of coupons. |
| **POST** | `/api/v1/admins/coupons/create` | `coupons.create` | Mint/generate new batches of coupon codes. |
| **POST** | `/api/v1/admins/coupons/assign` | `coupons.assign` | Force-allocate a coupon directly to a specific user/customer ID. |
| **POST** | `/api/v1/admins/coupons/status` | `coupons.status` | Bulk check or update statuses of various coupon codes. |
| **POST** | `/api/v1/admins/coupons/validate` | `coupons.validate` | Dry-run validation of a coupon against business logic. |
| **POST** | `/api/v1/admins/coupons/redeem` | `coupons.redeem` | Admin-overridden process to mark a coupon as used. |
| **POST** | `/api/v1/admins/coupons/unredeem` | `coupons.unredeem` | Revert a used coupon back to an active state. |
| **POST** | `/api/v1/admins/coupons/{coupon}` | `coupons.show` | Fetch specific details of a singular coupon ID. |
| **PUT** | `/api/v1/admins/coupons/{coupon}` | `coupons.update` | Modify properties of an individual coupon. |
| **DELETE** | `/api/v1/admins/coupons/{coupon}` | `coupons.destroy` | Hard/Soft delete a coupon record from the system. |

---

## 👥 Admin - Customer Management
*Handles heavy customer CRM data operations. Features multiple bulk-processing optimizations.*

| Method | Endpoint | Named Route | Purpose / Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/v1/admins/customers` | `customers.index` | Filter and query the CRM customer base. |
| **POST** | `/api/v1/admins/customers/create` | `customers.create` | Create a new customer profile manually. |
| **POST** | `/api/v1/admins/customers/{customer}` | `customers.show` | View full details of a single customer profile. |
| **PUT** | `/api/v1/admins/customers/{customer}` | `customers.update` | Update a customer's specific profile info. |
| **DELETE** | `/api/v1/admins/customers/delete` | `customers.destroy` | Handle multi-select/bulk customer profile deletions. |
| **GET** | `/api/v1/admins/customers/validation-rules` | `customers.validation-rules` | Exposes dynamic validation rules required by frontend forms. |
| **POST** | `/api/v1/admins/customers/update-statistics` | `customers.update-statistics` | Recalculate customer metrics (e.g., total spent). |
| **POST** | `/api/v1/admins/customers/bulk-update` | `bulk-update` | Standard bulk updates for a list of customer profiles. |
| **POST** | `/api/v1/admins/customers/bulk-update-fields` | `bulk-update-fields` | Target and update specific columns across many records. |
| **POST** | `/api/v1/admins/customers/bulk-update-optimized` | `bulk-update-optimized` | High-performance chunked updates bypassing heavy Eloquent events. |
| **POST** | `/api/v1/admins/customers/bulk-update-transactional` | `bulk-update-transactional` | Atomic multi-record updates wrapped strictly in a database transaction. |

---

## 📱 Customer Facing Endpoints
*Endpoints directly consumed by mobile apps or client-side portals.*

### 🔐 Authentication
| Method | Endpoint | Named Route | Purpose / Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/v1/customers/oauth/logout` | `oauth.logout` | Invalidate current access token session. |
| **POST** | `/api/v1/customers/oauth/revoke-refresh-token` | - | Revoke the OAuth refresh token to force full re-login. |

### 👤 Profile
| Method | Endpoint | Named Route | Purpose / Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/v1/customers/profile` | `profile` | Fetch authenticated customer's own profile payload. |
| **PUT** | `/api/v1/customers/profile` | `profile.update` | Allow a customer to update their own contact details. |

### 🎁 Wallet & Coupons
| Method | Endpoint | Named Route | Purpose / Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/v1/customers/coupons/my-coupons` | `coupons.my-coupons` | Fetch the user's active wallet of claimed coupons. |
| **POST** | `/api/v1/customers/coupons/claimable` | `coupons.claimable` | List public coupons available for this user to grab. |
| **POST** | `/api/v1/customers/coupons/claim` | `coupons.claim` | Attempt to tie a claimable coupon code to the user's wallet. |
| **POST** | `/api/v1/customers/coupons/validate` | `coupons.validate` | Client-side validation check before showing checkout. |
| **POST** | `/api/v1/customers/coupons/redeem` | `coupons.redeem` | Trigger point for applying a coupon during a purchase. |

---

## 🗺️ System Utilities
*Drop-down and configuration data sources shared throughout the system.*

| Method | Endpoint | Named Route | Purpose / Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/systems/countries` | `systems.countries.index` | Dropdown source for available countries. |
| **POST** | `/api/systems/states` | `systems.states.index` | Dropdown source for states (filtered by country). |
| **POST** | `/api/systems/cities` | `systems.cities.index` | Dropdown source for cities (filtered by state). |
| **POST** | `/api/systems/industries` | `systems.industries.index` | B2B target classification list for customer profiles. |