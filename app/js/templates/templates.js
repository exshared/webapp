angular.module("exsharer.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/auth/login.tpl.html","<md-dialog aria-label\"Iniciar sesión\" style=\"width: 350px\">\n    <form name=\"loginForm\" ng-submit=\"login(user)\">\n        <md-dialog-content class=\"sticky-container\">\n            <md-subheader class=\"md-sticky-no-effect\">\n                <h2>Iniciar sesión</h2>\n            </md-subheader>\n        </md-dialog-content>\n        <div class=\"md-actions\" layout=\"column\">\n            <md-input-container class=\"md-icon-float\" >\n                <label>Usuario</label>\n                <md-icon md-svg-src=\"account\" class=\"name\"></md-icon>\n                <input ng-model=\"user.username\" type=\"text\">\n            </md-input-container>\n            <md-input-container class=\"md-icon-float\">\n                <label>Contraseña</label>\n                <md-icon md-svg-src=\"key\" class=\"name\"></md-icon>\n                <input type=\"password\" ng-model=\"user.password\">\n            </md-input-container>\n        </div>\n        <div class=\"md-actions\">\n            <md-button class=\"md-mini md-primary\" aria-label=\"Use Android\">\n              <md-icon md-svg-src=\"facebook\" style=\"color: #3b5998;\"></md-icon>\n            </md-button>\n            <md-button class=\"md-raised md-primary\">\n                Aceptar\n            </md-button>\n        </div>\n    </form>\n</md-dialog>\n");
$templateCache.put("views/auth/singup.tpl.html","<md-dialog aria-label\"Iniciar sesión\" style=\"width: 450px\">\n    <form name=\"singupForm\" ng-submit=\"singup(user)\">\n        <md-dialog-content class=\"sticky-container\">\n            <md-subheader class=\"md-sticky-no-effect\">\n                <h2>Registro</h2>\n            </md-subheader>\n        </md-dialog-content>\n        <div class=\"md-actions\" layout=\"column\">\n            <md-input-container>\n                <label>Usuario</label>\n                <input ng-model=\"user.username\" type=\"text\">\n            </md-input-container>\n            <md-input-container>\n                <label>Correo</label>\n                <input ng-model=\"user.email\" type=\"email\">\n            </md-input-container>\n            <md-input-container>\n                <label>Nombres</label>\n                <input ng-model=\"user.name.first\" type=\"text\">\n            </md-input-container>\n            <md-input-container>\n                <label>Apellidos</label>\n                <input ng-model=\"user.name.last\" type=\"text\">\n            </md-input-container>\n            <md-input-container>\n                <label>Fecha de nacimiento</label>\n                <input ng-model=\"user.birthday\" type=\"date\">\n            </md-input-container>\n            <md-input-container>\n                <label>Contraseña</label>\n                <input type=\"password\" ng-model=\"user.password\">\n            </md-input-container>\n        </div>\n        <div class=\"md-actions\">\n            <md-button class=\"md-mini md-primary\">\n              <md-icon md-svg-src=\"facebook\" style=\"color: #3b5998;\"></md-icon>\n            </md-button>\n            <md-button class=\"md-raised md-primary\">\n                Aceptar\n            </md-button>\n        </div>\n    </form>\n</md-dialog>\n");
$templateCache.put("views/components/ex-menu.tpl.html","<md-toolbar ng-class=\'{\"md-tall\": size == \"tall\"}\'>\n      <div class=\"md-toolbar-tools\">\n        <md-button class=\"md-icon-button\" aria-label=\"Settings\" ng-if=\"menu\">\n          <md-icon md-svg-icon=\"img/icons/menu.svg\"></md-icon>\n        </md-button>\n        {{menu}}\n        <h2>\n          <a ui-sref=\"home\"><span>{{title}}</span></a>\n        </h2>\n        <span flex></span>\n        <div ng-transclude>\n\n        </div>\n        <md-button class=\"md-icon-button\" aria-label=\"More\" ng-click=\"options()\">\n          <md-icon md-svg-icon=\"more_vert\"></md-icon>\n        </md-button>\n      </div>\n</md-toolbar>\n");
$templateCache.put("views/components/options-auth.tpl.html","<md-bottom-sheet class=\"md-list md-has-header\">\n  <md-subheader>\n      <h3>\n          {{user.name.first}} {{user.name.last}}\n          <p style=\"line-height:1px;\">\n              <small style=\"font-weight: normal; \">{{user.email}}</small>\n          </p>\n      </h3>\n      </md-subheader>\n  <md-list>\n    <md-list-item ng-repeat=\"item in items\">\n      <md-button class=\"md-list-item-content\" ng-click=\"action($index, $event)\">\n        <md-icon md-svg-src=\"{{item.icon}}\"></md-icon>\n        <span class=\"md-inline-list-icon-label\">{{ item.name }}</span>\n      </md-button>\n    </md-list-item>\n  </md-list>\n</md-bottom-sheet>\n");
$templateCache.put("views/components/options-no-auth.tpl.html","<md-bottom-sheet class=\"md-list md-has-header\">\n  <md-subheader><h3>¡Haz parte de este movimiento social!</h3></md-subheader>\n  <md-list>\n    <md-list-item ng-repeat=\"item in items\">\n      <md-button class=\"md-list-item-content\" ng-click=\"action($index, $event)\">\n        <md-icon md-svg-src=\"{{item.icon}}\"></md-icon>\n        <span class=\"md-inline-list-icon-label\">{{ item.name }}</span>\n      </md-button>\n    </md-list-item>\n  </md-list>\n</md-bottom-sheet>\n");
$templateCache.put("views/user/addAnswer.tpl.html","<md-dialog aria-label\"Agregar pregunta\" style=\"width: 600px\">\n    <form name=\"loginForm\" ng-submit=\"login(user)\">\n        <md-dialog-content class=\"sticky-container\">\n            <md-subheader class=\"md-sticky-no-effect\">\n                <h2>Agregar pregunta</h2>\n            </md-subheader>\n        </md-dialog-content>\n        <div class=\"md-actions\" layout=\"column\">\n            <md-input-container flex>\n                <label>Pregunta</label>\n            <textarea ng-model=\"proposal\" columns=\"1\" md-maxlength=\"300\"></textarea>\n      </md-input-container>\n        </div>\n        <div class=\"md-actions\">\n            <md-button class=\"md-raised md-primary\">\n                Aceptar\n            </md-button>\n        </div>\n    </form>\n</md-dialog>\n");
$templateCache.put("views/user/addProposal.tpl.html","<md-dialog aria-label\"Agregar propuesta\" style=\"width: 600px\">\n    <form name=\"addProposalForm\" ng-submit=\"addProposal(proposal)\">\n        <md-dialog-content class=\"sticky-container\">\n            <md-subheader class=\"md-sticky-no-effect\">\n                <h2>Agregar propuesta</h2>\n            </md-subheader>\n        </md-dialog-content>\n        <div class=\"md-actions\" layout=\"column\">\n            <md-input-container flex>\n                <label>Propuesta</label>\n            <textarea ng-model=\"proposal.description\" columns=\"1\" md-maxlength=\"300\"></textarea>\n      </md-input-container>\n        </div>\n        <div class=\"md-actions\">\n            <md-button class=\"md-raised md-primary\">\n                Aceptar\n            </md-button>\n        </div>\n    </form>\n</md-dialog>\n");
$templateCache.put("views/user/home.tpl.html","<ex-menu title=\"ExSharer\"></ex-menu>\n<md-grid-list\n        md-cols-sm=\"1\" md-cols-md=\"2\" md-cols-gt-md=\"6\"\n        md-row-height-gt-md=\"1:1\" md-row-height=\"2:2\"\n        md-gutter=\"12px\" md-gutter-gt-sm=\"8px\" >\n    <md-grid-tile class=\"gray\"\n        md-rowspan=\"3\" md-colspan=\"2\" md-colspan-sm=\"1\">\n      <md-grid-tile-footer>\n        <a ui-sref=\"project({id: projects[0]._id})\">\n            <h3>{{projects[0].title}}</h3>\n        </a>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n    <md-grid-tile class=\"green\">\n      <md-grid-tile-footer>\n          <a ui-sref=\"project({id: projects[1]._id})\">\n              <h3>{{projects[1].title}}</h3>\n          </a>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n    <md-grid-tile class=\"yellow\">\n      <md-grid-tile-footer>\n          <a ui-sref=\"project({id: projects[2]._id})\">\n              <h3>{{projects[2].title}}</h3>\n          </a>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n    <md-grid-tile class=\"blue\"\n        md-rowspan=\"2\">\n      <md-grid-tile-footer>\n        <h3>Title 4</h3>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n    <md-grid-tile class=\"red\"\n        md-rowspan=\"2\" md-colspan=\"2\" md-colspan-sm=\"1\">\n      <md-grid-tile-footer>\n        <h3>Title 5</h3>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n    <md-grid-tile class=\"green\"\n        md-rowspan=\"2\" >\n      <md-grid-tile-footer>\n        <h3>Title 6</h3>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n  </md-grid-list>\n");
$templateCache.put("views/user/project-options.tpl.html","<md-bottom-sheet class=\"md-grid\">\n  <md-list>\n    <md-list-item ng-repeat=\"item in items\">\n      <md-button class=\"md-grid-item-content\" ng-click=\"actions($event, $index)\">\n        <md-icon md-svg-src=\"{{item.icon}}\"></md-icon>\n        <div class=\"md-grid-text\"> {{ item.name }}</div>\n      </md-button>\n    </md-list-item>\n  </md-list>\n</md-bottom-sheet>\n");
$templateCache.put("views/user/project.tpl.html","<ex-menu title=\"ExSharer\" size=\"tall\" style=\"z-index: initial\"></ex-menu>\n<center>\n\n    <md-card style=\"width:70%; margin-top: -64px; z-index: 5; background-color: none;\n    position: relative;\"\n    class=\"md-whiteframe-z3\">\n    <md-card-content>\n        <h2 class=\"md-title\">{{project.title}}\n            <small>\n            </small>\n        </h2>\n        <p>\n            {{project.description}}\n        </p>\n    </md-card-content>\n    <div class=\"md-actions\" layout=\"row\" layout-align=\"end center\">\n        <md-button class=\"md-icon-button\">\n            <md-tooltip>\n                Me gusta\n            </md-tooltip>\n            {{project.likes.length}} <md-icon md-svg-icon=\"heart\"></md-icon>\n        </md-button>\n        <md-button class=\"md-icon-button\">\n            <md-tooltip>\n                Seguir\n            </md-tooltip>\n            <md-icon md-svg-icon=\"plus\"></md-icon>\n        </md-button>\n    </div>\n</md-card>\n\n<md-card style=\"width:70%; position: relative;\"\nclass=\"md-whiteframe-z3\">\n<md-card-content>\n    <h3 class=\"md-title\">Propuestas\n        <small>\n        </small>\n    </h3>\n\n    <md-list style=\"text-align: left;\">\n        <md-list-item class=\"md-2-line\">\n            <img ng-src=\"{{todos[0].face}}?20\" class=\"md-avatar\" alt=\"{{todos[0].who}}\">\n            <div class=\"md-list-item-text\">\n                <h3>Title</h3>\n                <p>Text</p>\n            </div>\n            <md-button class=\"md-icon-button\">\n                <md-tooltip>\n                    Vota\n                </md-tooltip>\n                {{project.likes.length}}\n                <md-icon md-svg-icon=\"star-outline\"></md-icon>\n            </md-button>\n        </md-list-item>\n    </md-list>\n\n</md-card-content>\n</md-card>\n\n<md-card style=\"width:70%; position: relative;\"\nclass=\"md-whiteframe-z3\">\n<md-card-content>\n    <h2 class=\"md-title\">Preguntas\n        <small>\n        </small>\n    </h2>\n\n    <md-list style=\"text-align: left;\">\n        <md-list-item class=\"md-2-line\">\n            <img ng-src=\"{{todos[0].face}}?20\" class=\"md-avatar\" alt=\"{{todos[0].who}}\">\n            <div class=\"md-list-item-text\">\n                <h3>Title</h3>\n                <p>Text</p>\n            </div>\n        </md-list-item>\n    </md-list>\n</md-card-content>\n\n</md-card>\n\n<md-button class=\"md-fab md-primary md-hue-1 projectButton\"\nstyle=\"position: absolute; top: 90px; right:60px; z-index: 4;\"\nng-click=\"fab($event)\" aria-label=\"opciones\">\n<md-tooltip>\n    Participa\n</md-tooltip>\n<md-icon md-svg-src=\"human\"></md-icon>\n</md-button>\n</center>\n");}]);