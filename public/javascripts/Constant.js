/**
 * Author: Ken
 * Date: 22/04/2013
 * Time: 13:54
 */
/*global define*/
define(function () {
    "use strict";
    return {
        ERROR : {
            LOAD_DATA : {
                LACK_OPTION : 'no option',
                LOAD_IMAGE : 'cannot load image from base64'
            },
            FLICKR : 'Flickr failed - reaosn unknown',
            PHOTOS : {
                NO_PHOTOS : 'no photos passing'
            },
            PHOTO : {
                NO_CONTEXT : 'no canvas context',
                NO_IMAGE : 'no image specified'
            },
            SERVER : {
                IMAGE : "image cannot be saved"
            }
        },
        FLICKR : {
            SEARCH_PHOTO : 'https://api.flickr.com/services/rest/',
            METHOD: 'flickr.photos.search',
            PER_PAGE: '5',
            FORMAT: 'json',
            KEY : '870f146ecd203e95470885fb2ce29af8',
            PAGE : 1,
            MEDIUM_SIZE : '_m.jpg',
            LARGE_SIZE : '_c.jpg'

        },
        SEARCH : {
            DEFAULT_TEXT : 'cat'
        },
        CANVAS : {
            DEFAULT_STYLE : '#ffffff',
            DEFAULT_THICKNESS : 1,
            TOOL_DISAPPEAR_TIME : 5000

        },
        OTHER : {
            // match URL for testing purpose
            URL : /http[s]?:\/\/([a-z|0-9]+[\\.])+[a-z|0-9]{2,9}([\/|a-z|0-9-*.*?_=%&])*/gmi
        }
    };
});