/*jshint esnext: true */
import yoTemplate from "../yo.html";

export default function YoDirective() {

    return {
        template : yoTemplate,
        restrict : 'E',
        scope : {},
        controller : YoDirectiveController,
        controllerAs : 'ctrl',
        bindToController : true,
    };

    function compile() {

    }

    function link() {

    }
}

function  YoDirectiveController (){
      this.name = 'qqqqq';
}
