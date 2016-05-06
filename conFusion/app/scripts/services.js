'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
                
                this.getPromotion = function() {
                    return $resource(baseURL+"promotions/:id",null,{'update':{method:'PUT'}});
                };
                
    
                this.getDishes = function(){
                    return $resource(baseURL+"dishes/:id",null,{'update':{method:'PUT'}});
                };
    
                        
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            
    
            var corpfac = {};
    
            corpfac.getLeader = function() {
                return $resource(baseURL+"leadership/:id",null,{'update':{method:'PUT'}});
            };
    
            return corpfac;
    
        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {
            
            var feedbackfac = {};
            
            feedbackfac.getFeedback = function() {
                return $resource(baseURL+"feedback/:id",null,{'update':{method:'PUT'}});
            };
            
            feedbackfac.sendFeedback = function(feedback) {
                return $resource(baseURL+"feedback/:id",null).save(feedback);
            };
            
            return feedbackfac;
            
        }])

;
