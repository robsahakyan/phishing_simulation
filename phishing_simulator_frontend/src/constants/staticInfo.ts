import { iconConstants } from 'src/configs/srcConfig'
import type { IconConstantsType } from 'src/configs/srcConfig'
import { ContactTypeEnum } from 'src/types/enums/contact-type.enum'

type ContactsType = {
  value: string
  type: ContactTypeEnum
}

type SocialLinkListType = {
  url: string;
  iconValue: string;
}

export const additionalFeePercentage = 32;

export const keywordsOfSEO = [].join(', ');

export const contactsList: ContactsType[] = [
  {
    value: '+1(919)-919-191',
    type: ContactTypeEnum.PHONE,
  },
  {
    value: 'email@example.com',
    type: ContactTypeEnum.EMAIL,
  }
]

const socialLinkList: SocialLinkListType[] = [
  {
    iconValue: 'whatsAppIcon',
    url: 'http:/wpexample.com'
  }, 
  {
    iconValue:'telegramIcon',
    url: 'https://t.me'
  }
]

export function getSocialMediaList() {
  return socialLinkList.map(el => ({ iconSrc: iconConstants[el.iconValue as keyof IconConstantsType], url: el.url}))
}
