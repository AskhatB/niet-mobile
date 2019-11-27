import React from 'react';
import VkIcon from '../../icons/vk';
import FacebookIcon from '../../icons/facebook';
import OdnoklassnikiIcon from '../../icons/odnoklassniki';
import TwitterIcon from '../../icons/twitter';
import YouTubeIcon from '../../icons/youtube';
import InstagramIcon from '../../icons/instagram';
import { Wrap, Item } from './style';

const SocialNetwork = () => {
  return (
    <Wrap>
      <Item>
        <VkIcon />
      </Item>
      <Item>
        <FacebookIcon />
      </Item>
      <Item>
        <OdnoklassnikiIcon />
      </Item>
      <Item>
        <TwitterIcon />
      </Item>
      <Item>
        <YouTubeIcon />
      </Item>
      <Item>
        <InstagramIcon />
      </Item>
    </Wrap>
  );
};

export default SocialNetwork;
