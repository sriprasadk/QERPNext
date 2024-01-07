# ERP Account Management Module

This documentation outlines the database tables related to account management in our ERP system.  These are templates and can be customized.

## Accounts Table

The `accounts` table stores information about various accounts within the ERP system.

### Fields:

- `account_id`: Unique identifier for the account (Primary Key)
- `account_name`: Name of the account
- `account_type`: Type of account (e.g., customer, vendor, partner)
- `address`: Address details
- `phone`: Contact phone number
- `email`: Contact email address
- `created_at`: Timestamp for account creation
- `updated_at`: Timestamp for last update

## Transactions Table

The `transactions` table records financial transactions associated with accounts.

### Fields:

- `transaction_id`: Unique identifier for the transaction (Primary Key)
- `account_id`: Foreign key referencing the account involved in the transaction
- `transaction_type`: Type of transaction (e.g., invoice, payment, credit note)
- `amount`: Transaction amount
- `currency`: Currency of the transaction
- `transaction_date`: Date of the transaction
- `description`: Brief description of the transaction

## Contacts Table

The `contacts` table stores contact information associated with accounts.

### Fields:

- `contact_id`: Unique identifier for the contact (Primary Key)
- `account_id`: Foreign key referencing the account related to the contact
- `full_name`: Full name of the contact
- `email`: Contact email address
- `phone`: Contact phone number
- `department`: Department of the contact (if applicable)
- `position`: Position or role of the contact within the account

## Permissions Table

The `permissions` table manages access permissions related to accounts.

### Fields:

- `permission_id`: Unique identifier for the permission (Primary Key)
- `account_id`: Foreign key referencing the account for which permissions are set
- `module_name`: Name of the module or system area
- `read_access`: Boolean indicating read access permission
- `write_access`: Boolean indicating write access permission
- `delete_access`: Boolean indicating delete access permission

This documentation provides an overview of the main database tables related to account management in our ERP system. Additional tables and relationships may exist to support various functionalities and business processes.
