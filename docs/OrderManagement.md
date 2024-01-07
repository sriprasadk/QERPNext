# ERP Order Management

This documentation outlines the order management process for both purchase and sale transactions in our ERP system.

## Purchase Order Management

### Purchase Orders Table

The `purchase_orders` table manages purchase orders placed by the company.

#### Fields:

- `purchase_order_id`: Unique identifier for the purchase order (Primary Key)
- `vendor_id`: Foreign key referencing the vendor supplying the goods
- `order_date`: Date when the purchase order was created
- `expected_delivery_date`: Expected delivery date for the order
- `status`: Current status of the purchase order (e.g., pending, delivered, canceled)
- `total_amount`: Total amount of the purchase order

### Purchase Order Items Table

The `purchase_order_items` table lists the items included in each purchase order.

#### Fields:

- `item_id`: Unique identifier for the item (Primary Key)
- `purchase_order_id`: Foreign key referencing the associated purchase order
- `product_id`: Foreign key referencing the product being purchased
- `quantity`: Quantity of the product ordered
- `unit_price`: Unit price of the product at the time of purchase

## Sale Order Management

### Sales Orders Table

The `sales_orders` table manages orders received from customers.

#### Fields:

- `sales_order_id`: Unique identifier for the sales order (Primary Key)
- `customer_id`: Foreign key referencing the customer placing the order
- `order_date`: Date when the sales order was created
- `delivery_date`: Expected delivery date for the order
- `status`: Current status of the sales order (e.g., processing, shipped, delivered)
- `total_amount`: Total amount of the sales order

### Sales Order Items Table

The `sales_order_items` table lists the items included in each sales order.

#### Fields:

- `item_id`: Unique identifier for the item (Primary Key)
- `sales_order_id`: Foreign key referencing the associated sales order
- `product_id`: Foreign key referencing the product being sold
- `quantity`: Quantity of the product ordered by the customer
- `unit_price`: Unit price of the product at the time of sale

## Order Workflow

1. **Creation:** Orders are created based on customer demand or procurement requirements.
2. **Processing:** Orders move through processing stages, including approval, fulfillment, and scheduling.
3. **Fulfillment:** Goods are dispatched (for sales) or received (for purchases).
4. **Delivery/Receipt:** Orders are delivered to customers or received from vendors.
5. **Completion:** Orders are marked as complete upon successful delivery or receipt.

This documentation provides an overview of the main tables and workflow for managing both purchase and sales orders in our ERP system. Additional tables and functionalities may exist to support order management processes.
