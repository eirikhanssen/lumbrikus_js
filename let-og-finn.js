/*jslint browser: true */
/*global window, Snap */
function init() {
    'use strict';
    console.log("let-og-finn init");
    var s = new Snap("#SVG_let_og_finn");
    var group_active_zones = s.select("#g_active_zones");
    //console.log(group_active_zones);
    group_active_zones.addClass('show');
    var zones = group_active_zones.selectAll('path');
    zones.forEach(function (el) {
        el.click(function () {
            el.addClass('clicked');
            var t_id = this.attr("id").replace(/^z_/, "#t_");
            var text_el = s.select(t_id);
            text_el.addClass("show action");
            window.setTimeout(function () {
                text_el.removeClass("action");
            }, 710);
        });
    });
}
window.addEventListener("load", init, false);