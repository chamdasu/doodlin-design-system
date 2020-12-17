import React from 'react';
import Text from '../introduction/Styleguide/Text/Text';
import Palette from '../introduction/Styleguide/Color/Palette';
import '../index.scss';
import '../reset.scss';

export default {
  title: 'Introduction/Styleguide',
  component: Text,
};

export const Typography = () => (
  <div style={{ padding: 20 }}>
    <div style={{ marginBottom: 40 }}>
      <Text></Text>
      <Text variant='ui-lg' block nonKorean>
        <span>Title</span>
      </Text>
      <Text variant='tit-xxxl' block>
        <span>타이틀 - 48pt</span>
      </Text>
      <Text variant='tit-xxl' block>
        <span>타이틀 - 36pt</span>
      </Text>
      <Text variant='tit-xl' block>
        <span>타이틀 - 24pt</span>
      </Text>
      <Text variant='tit-lg' block>
        <span>타이틀 - 21pt</span>
      </Text>
      <Text variant='tit-md' block>
        <span>타이틀 - 18pt</span>
      </Text>
    </div>

    <div style={{ marginBottom: 40 }}>
      <Text></Text>
      <Text variant='ui-lg' block nonKorean>
        <span>UI, Button</span>
      </Text>
      <div style={{ marginTop: 10 }}>
        <Text></Text>
        <Text variant='ui-lg' block>
          <span>UI, 버튼 - 18pt</span>
        </Text>
        <Text variant='ui-md' block>
          <span>UI, 버튼 - 16pt</span>
        </Text>
        <Text variant='ui-sm' block>
          <span>UI, 버튼 - 14pt</span>
        </Text>
        <Text variant='ui-xs' block>
          <span>UI, 버튼 - 12pt</span>
        </Text>
      </div>
    </div>

    <div>
      <Text></Text>
      <Text variant='ui-lg' block nonKorean>
        <span>Description</span>
      </Text>
      <Text variant='desc-lg' block>
        <div
          style={{
            maxWidth: 500,
            wordBreak: 'break-word',
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <span>
            소학교 내 하나의 마리아 있습니다. 무덤 가득 별 듯합니다. 계집애들의
            말 딴은 언덕 오면 듯합니다. 애기 피어나듯이 별들을 시인의 듯합니다.
            - 18pt
          </span>
        </div>
      </Text>
      <Text variant='desc-md' block>
        <div
          style={{ maxWidth: 500, wordBreak: 'break-word', marginBottom: 10 }}
        >
          <span>
            소학교 내 하나의 마리아 있습니다. 무덤 가득 별 듯합니다. 계집애들의
            말 딴은 언덕 오면 듯합니다. 애기 피어나듯이 별들을 시인의 듯합니다.
            - 16pt
          </span>
        </div>
      </Text>
      <Text variant='desc-sm' block>
        <div
          style={{ maxWidth: 500, wordBreak: 'break-word', marginBottom: 10 }}
        >
          <span>
            소학교 내 하나의 마리아 있습니다. 무덤 가득 별 듯합니다. 계집애들의
            말 딴은 언덕 오면 듯합니다. 애기 피어나듯이 별들을 시인의 듯합니다.
            - 14pt
          </span>
        </div>
      </Text>
      <Text variant='desc-xs' block>
        <div
          style={{ maxWidth: 500, wordBreak: 'break-word', marginBottom: 10 }}
        >
          <span>
            소학교 내 하나의 마리아 있습니다. 무덤 가득 별 듯합니다. 계집애들의
            말 딴은 언덕 오면 듯합니다. 애기 피어나듯이 별들을 시인의 듯합니다.
            - 12pt
          </span>
        </div>
      </Text>
    </div>
  </div>
);

export const Color = () => {
  const Palette = ({ name, color }: any) => (
    <div
      style={{
        display: 'inline-block',
        width: 150,
        height: 190,
        marginTop: 8,
        marginRight: 10,
        textAlign: 'center',
        borderRadius: 4,
        backgroundColor: '#fff',
        border: '1px solid #ced4da',
        overflow: 'hidden',
        fontSize: 12,
      }}
    >
      <div
        style={{
          width: '100%',
          height: 130,
          backgroundColor: color,
          marginBottom: 6,
        }}
      />
      <Text></Text>
      <Text block variant='ui-md' nonKorean>
        <span style={{ fontWeight: 500 }}>{name}</span>
      </Text>
      <Text block variant='ui-xs' nonKorean>
        <span style={{ fontWeight: 300 }}>{color}</span>
      </Text>
    </div>
  );
  return (
    <div style={{ padding: 20 }}>
      <Text></Text>
      <Text variant='ui-lg' block nonKorean>
        <span>Yellow</span>
      </Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name='Yellow0' color='#fff9db' />
        <Palette name='Yellow1' color='#fff3bf' />
        <Palette name='Yellow2' color='#ffec99' />
        <Palette name='Yellow3' color='#ffe066' />
        <Palette name='Yellow4' color='#ffd43b' />
        <Palette name='Yellow5' color='#fcc419' />
        <Palette name='Yellow6' color='#fab005' />
        <Palette name='Yellow7' color='#f59f00' />
        <Palette name='Yellow8' color='#f08c00' />
        <Palette name='Yellow9' color='#e67700' />
      </div>
      <Text></Text>
      <Text variant='ui-lg' block nonKorean>
        <span>Gray</span>
      </Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name='Gray0' color='#f8f9fa' />
        <Palette name='Gray1' color='#f1f3f5' />
        <Palette name='Gray2' color='#e9ecef' />
        <Palette name='Gray3' color='#dee2e6' />
        <Palette name='Gray4' color='#ced4da' />
        <Palette name='Gray5' color='#adb5bd' />
        <Palette name='Gray6' color='#868e96' />
        <Palette name='Gray7' color='#495057' />
        <Palette name='Gray8' color='#343a40' />
        <Palette name='Gray9' color='#212529' />
      </div>
    </div>
  );
};

export const Icon = () => <div>【ツ】</div>;

export const Spacing = () => <div>【ツ】</div>;
