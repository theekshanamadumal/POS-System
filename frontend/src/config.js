const URL = {}


URL.GoogleMapsAPI = 'AIzaSyBNQsYuKSBIV1GWz8O3t0HKjMkGD_k5fsM';

/////////////////////// react app //////////////////////////


/////////////////////// rest api //////////////////////////


URL.main="http://localhost:3001";

URL.sellerLocation = URL.main+ "/management/sellerLocation";
URL.invoice = URL.main+ "/management/invoice";

URL.signin = "/api/auth/signin";
URL.signup = "/api/auth/signin";
URL.signout = "/api/auth/signout";


URL.mainpage = "/";
URL.signinpage = "/login";


URL.management = "/management";


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

URL.dailyTasks="/management/dailyTasks";

module.exports = URL;
