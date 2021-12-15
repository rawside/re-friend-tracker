export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Saschas Friend Tracker",
            "formList": [
                
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    "formFieldList": [
                       
                        {
                            "id": "Name",
                            "type": "text",
                            "name": "Name",
                            "width": 1,
                            "required": true
                        },

                        {
                            "id": "activitydate",
                            "type": "date",
                            "name": "Date",
                            "width": 2
                        },
                        
                        {
                    "id": "comment",
                    "type": "text",
                    "name": "Comments",
                    "width": 2,
                    "height": 4,
                    "maxLength": 5000,
                 },

               
                {
                            "type": "deleteButton",
                            "name": "Delete"
                }, {
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                } ]
                },
                
                {
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true
                },

                {
                    "id": "creationdate",
                    "type": "date",
                    "name": "CreationDate",
                    "width": 2
                },
                {
                    "id": "comment",
                    "type": "text",
                    "name": "Comments",
                    "width": 2,
                    "height": 4,
                    "maxLength": 5000,
                 },
                {
                            "type": "deleteButton",
                            "name": "Delete"
                }, {
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                } ]
                },
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [

                      
                       
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id":   "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2 },
                       
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },

                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                         },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },

                {
                    "id": "AddFriendForm",
                    "title": "Friend",
                    "url": "/activity/:activityKey/friend",
                    "formFieldList": [
                        {
                            "id": "friend",
                            "type": "autocomplete",
                            "name": "Friend",
                            "url": "/friend",
                            "defaultKey": "friendKey",
                            "readonly": true,
                            "form": "FriendForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "CanceAddFriendForml"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [

                        {
                            "id": "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                       
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "clouds",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "silver",
                            "page": "locationspage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fas fa-users",
                            "color": "concrete",
                            "page": "groupspage",
                        },
                        {
                            "type": "button",
                            "name": "Activities",
                            "icon": "fas fa-list",
                            "color": "asbestos",
                            "page" : "activitypage"
                        },
                    ]
                },

                {
                    "id": "activitypage",
                    "elementList": [
                        
                        {
                            "type": "backbutton",
                }, {
                "type": "newButton",
                "name": "NewActivity",
                "icon": "fa-weixin",
                "color": "asbestos",
                "form": {
                                "form": "ActivityForm"
                } },

                {
                    "type": "list",
                    "icon": "fa-weixin",
                    "color": "pumpkin",
                    "search": true,
                    "url": "/activity",
                    "page": "singleactivitypage",
                    
              },
                ] },
                {
                    "id": "groupspage",
                    "elementList": [
                           
                        {
                            "type": "backbutton",
                }, {
                "type": "newButton",
                "name": "NewGroup",
                "icon": "fa-weixin",
                "color": "concrete",
                "form": {
                                "form": "GroupForm"
                } },
                {
                    "type": "list",
                    "icon": "fa-weixin",
                    "color": "pumpkin",
                    "search": true,
                    "url": "/group",
                    "form": {
                          "form": "GroupForm"
                    }
              }
            ] },
                
                
                
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "clouds",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "pumpkin",
                            "search": true,
                            "url": "/friend",
                            "page" : "detailpageFriend"
                            
                        },
                        
                         {   "id":"detailpageFriend",
                         "elementList": [
                            {
                                "type": "backbutton",
                            },


                         ]

                    }
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "silver",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "pumpkin",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
                            }
                        },

                        
                    ]

                    
                },

                {
                    "id": "detailpageFriend",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "AddActivity",
                            "icon": "fa-calendar-alt",
                            "color": "asbestos",
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "color": "clouds",
                            "search": true,
                            "url": "/friend",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-calendar-alt",
                            "color": "pumpkin",
                            "search": true,
                            "url": "/friend/:friendKey/activity",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                    ]

                },
                {
                    "id": "singleactivitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "AddFriend",
                            "icon": "fa-user",
                            "color": "clouds",
                            "form": {
                                "form": "AddFriendForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "EditActivity",
                            "icon": "fa-calendar-alt",
                            "color": "asbestos",
                            "search": true,
                            "url": "/activity",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "pumpkin",
                            "search": true,
                            "url": "/activity/:activityKey/friend",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                    ]
                }

                
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
