import moment from 'moment';

export function getFileType(filename) {
    const ext = filename.split('.').pop();
    return ext.toLowerCase();
}

export function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

export function formatDate(timestamp) {
    return moment(timestamp * 1000).format('HH:mm DD-MM-YYYY');
}
