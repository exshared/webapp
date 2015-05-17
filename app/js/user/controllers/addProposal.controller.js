(function(){
    'use strict';

    angular
        .module('exsharer.user')
        .controller('AddProposalController', AddProposalController);

    function AddProposalController(
        $scope, $state, Proposal, Project, $mdDialog
    ){

        var project = $state.params.id;

        $scope.addProposal = function(proposal){

            Proposal.add(proposal).then(function(data){
                Project.asociateProposal(project, data._id).then(function(data){
                    $mdDialog.hide();
                });
            });
        };
    };
})()
