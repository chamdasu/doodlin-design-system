import React from "react";
import Button from "../component/Button";
import Modal from "../component/Modal";
import Text from "../component/Text";
import "../reset.scss";

export default {
  title: "Component/Modal",
  component: Modal,
};

export const Default = () => {
  return (
    <div>
      <Modal
        header={{ Text: "기본 모달" }}
        footer={{
          cancelBtn: (
            <Button className="cancel-btn" variant="ghost">
              취소
            </Button>
          ),
          submitBtn: <Button className="submit-btn">확인</Button>,
        }}
      >
        <Text size="desc-sm">
          같은 그들의 날카로우나 품으며, 하는 새 심장의 많이 보라. 두손을 어디
          그들의 황금시대를 예수는 이것이야말로 이것이다. 하는 그들은 우리
          이상의 청춘에서만 칼이다. 같은 그들의 날카로우나 품으며, 하는 새
          심장의 많이 보라. 두손을 어디 그들의 황금시대를 예수는 이것이야말로
          이것이다. 하는 그들은 우리 이상의 청춘에서만 칼이다. 같은 그들의
          날카로우나 품으며, 하는 새 심장의 많이 보라. 두손을 어디 그들의
          황금시대를 예수는 이것이야말로 이것이다. 하는 그들은 우리 이상의
          청춘에서만 칼이다. 같은 그들의 날카로우나 품으며, 하는 새 심장의 많이
          보라. 두손을 어디 그들의 황금시대를 예수는 이것이야말로 이것이다. 하는
          그들은 우리 이상의 청춘에서만 칼이다. 같은 그들의 날카로우나 품으며,
          하는 새 심장의 많이 보라. 두손을 어디 그들의 황금시대를 예수는
          이것이야말로 이것이다. 하는 그들은 우리 이상의 청춘에서만 칼이다. 같은
          그들의 날카로우나 품으며, 하는 새 심장의 많이 보라. 두손을 어디 그들의
          황금시대를 예수는 이것이야말로 이것이다. 하는 그들은 우리 이상의
          청춘에서만 칼이다.
        </Text>
      </Modal>
    </div>
  );
};
