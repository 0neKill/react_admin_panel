import * as actionAttachments from './attachments';
import * as actionGallery from './gallery';
import * as actionMasters from './masters';
import * as actionPrice from './price';


export default {
    ...actionAttachments,
    ...actionGallery,
    ...actionMasters,
    ...actionPrice
}
