# paytheman

## DESCRIPTION

This project uses a dataset containing debtors, their debts, and associated creditors. The debtor's name and contact information are presented in a table, with hyperlinks that allow users to view detailed information about their debts on a separate page.

An animated vertical bar graph categorizes debt amounts into four distinct ranges, displaying the percentage of debts in each range, the total number of debts in those categories, and the average amount owed.

Additionally, an animated horizontal bar chart provides insights into communication sentiment—whether interactions were positive, negative, or neutral. This data is shown as both percentages and total counts for each sentiment category.

When a specific debt is selected, the user is taken to a dynamically routed page that provides detailed information about the debt, including communications related to its resolution.

## DESIGN AND ASSETS

I constructed the data object based on my limited knowledge of debt and debt collection. I used ChatGPT to populate the fields with random data. While I could have fetched the data from a cloud database like MongoDB or PostgreSQL, I decided to keep the data local and spend more time focused on frontend development.

This project was designed "freehand". While I did find some inspiration from other websites, there was no design pattern or template that I followed.

Charts were made with HTML, CSS, and JavaScript - no UI libraries were used.

Icons are from React-Icons.

## GOALS

This project is designed to showcase my skills, with a focus on creating data-driven charts to highlight my abilities as a frontend developer. While I’m experienced with UI libraries like Material-UI and Bootstrap, I believe it's essential to have the capability to build components using HTML, CSS, and JavaScript.

## WISHLIST

Having a design for this project would have been extremely helpful, as I am not a professional UI/UX designer. I also would have preferred a more business-ready data object, which would have made data parsing and the flow between components and pages much smoother.

## INSTALLATION

- Node.js version >= v18.17.0 is required.
