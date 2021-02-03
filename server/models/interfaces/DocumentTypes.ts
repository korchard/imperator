export enum DocumentType {
  File = 'FILE',
  Audio = 'AUDIO',
  Image = 'IMAGE',
  Video = 'VIDEO',
  PDF = 'PDF',
  Spreadsheet = 'Spreadsheet',
  Link = 'Link',
}

export const getMimeFromDocumentType = (type: DocumentType): string => {
  switch (type) {
    case DocumentType.Audio:
      return 'audio/*'
    case DocumentType.Image:
      return 'image/*'
    case DocumentType.Video:
      return 'video/*'
    case DocumentType.PDF:
      return 'application/pdf'
    case DocumentType.Spreadsheet:
      return 'application/vnd.ms-excel'
    case DocumentType.File:
      return '*'
    default:
      return '*'
  }
}

export const getDocumentTypeFromMime = (mime?: string): DocumentType => {
  if (!mime) {
    return DocumentType.Link
  }
  if (mime.toLowerCase().startsWith('audio')) {
    return DocumentType.Audio
  } else if (mime.toLowerCase().startsWith('video')) {
    return DocumentType.Video
  } else if (mime.toLowerCase().startsWith('image')) {
    return DocumentType.Image
  } else if (mime.toLowerCase() === 'application/pdf') {
    return DocumentType.PDF
  } else if (mime.toLowerCase() === 'application/vnd.ms-excel') {
    return DocumentType.Spreadsheet
  }
  return DocumentType.File
}
