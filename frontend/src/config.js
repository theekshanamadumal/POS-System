const URL = {}
URL.main="http://localhost:3001";
URL.GoogleMapsAPI = 'AIzaSyBNQsYuKSBIV1GWz8O3t0HKjMkGD_k5fsM';

URL.sellerLocation = "http://localhost:3001/management/sellerLocation";

URL.management = "/management";

URL.invoice = "http://localhost:3001/management/invoice";

URL.products = "/management/products";
URL.addProduct = "/management/addProduct";
URL.productCategory = "/management/productCategory";
URL.addProductCategory ="/management/addProductCategory";
URL.productComp ="/management/product/";
URL.updateProduct="/management/updateProduct/";

URL.routes="/management/routes" ;
URL.addRoute="/management/routes/addroute";
URL.addSalesRoute="/management/addSalesRoute";
URL.salesRouteComp="/management/salesRoute/";
URL.salesRoutes="/management/salesRoutes";
URL.updateSaleRoute="/management/updateSalesRoute/";
URL.lastSales="/management/route/lastSales";

URL.salesperson="/management/salesperson";
URL.addSalesperson="/management/addSalesperson";
URL.updateSalesperson="/management/updateSalesperson/";

URL.shops="/management/shops";
URL.shopComp="/management/shop/";
URL.addShops="/management/shops/addShop";
URL.updateShop="/management/updateShop/";

URL.tasks="/management/tasks";
URL.addDailyTarget="/management/adddailyTarget";

URL.itAdmin="/itAdmin";
URL.manager="/itAdmin/management/";
URL.addManager="/itAdmin/addManager";
URL.editManager="/itAdmin/editManager/";

URL.analytics="/management/analytics";
URL.sales="management/analytics#sales";
URL.analyticsSalesperson="management/analytics#salesperson";
URL.analyticsCategory="management/analytics#category";

URL.orders="/management/orders";
URL.orderComp="/management/order/";
module.exports = URL;
