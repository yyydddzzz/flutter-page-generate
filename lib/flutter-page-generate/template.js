"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageModel = exports.pageBindings = exports.pageController = exports.pageView = void 0;
const formatName_1 = require("./formatName");
const pageView = (pageName) => {
    const pageHumpName = formatName_1.toBigHump(pageName);
    const pageLineName = formatName_1.toBottomLine(pageName);
    return `import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '${pageLineName}_controller.dart';
import 'package:zwcp_base_flutter_app/modules/base/base_page.dart';

class ${pageHumpName}Page extends BasePage<${pageHumpName}Controller> {
    const ${pageHumpName}Page({Key? key}) : super(key: key);

    @override
    ScaffoldParam get scaffoldParam => ScaffoldParam(title: '${pageHumpName}Page');

    @override
    Widget body(BuildContext context, state) {
      return Container();
    }
}
`;
};
exports.pageView = pageView;
const pageController = (pageName) => {
    const pageHumpName = formatName_1.toBigHump(pageName);
    return `import 'package:get/get.dart';
import 'package:zwcp_base_flutter_app/modules/base/base_controller.dart';

class ${pageHumpName}Controller extends BaseController {
    final count = 0.obs;

    @override
    void onInit() {
    super.onInit();
    }

    @override
    void onReady() {}

    @override
    void onClose() {}

    increment() => count.value++;
}
`;
};
exports.pageController = pageController;
const pageBindings = (pageName) => {
    const pageHumpName = formatName_1.toBigHump(pageName);
    const pageLineName = formatName_1.toBottomLine(pageName);
    return `import 'package:get/get.dart';
import '${pageLineName}_controller.dart';

class ${pageHumpName}Binding extends Bindings {
    @override
    void dependencies() {
    Get.lazyPut<${pageHumpName}Controller>(() => ${pageHumpName}Controller());
    }
}
`;
};
exports.pageBindings = pageBindings;
const pageModel = () => ``;
exports.pageModel = pageModel;
