window.CONFIG = {
  "routes": {
    "/": {
      "controller": "HomeCtrl",
      "templateUrl": "/views/home.html"
    },
    "/report/:id": {
      "controller": "ReportViewCtrl",
      "templateUrl": "/views/view-report.html"
    }
  }
};
