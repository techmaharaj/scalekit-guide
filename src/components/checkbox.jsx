const CHECKBOX_LS_KEY = "SK_CB_PRST";

const lsUtils = {
    isChecked: (cbId) => {
        try {
            return JSON.parse(window.localStorage.getItem(CHECKBOX_LS_KEY))[cbId];
        } catch (e) {
            return false;
        }
    },
    updateChecked: (cbId, isChecked) => {
        if (!cbId) {
            throw new Error(`Missing cbId. Can not persist data`);
        }
        const data = JSON.parse(window.localStorage.getItem(CHECKBOX_LS_KEY)) || {};
        data[cbId] = !!isChecked;
        window.localStorage &&
            window.localStorage.setItem(CHECKBOX_LS_KEY, JSON.stringify(data));
    },
};

export default function Checkbox({ shouldPersist = true, id, class_name='persist_chkbox' }) {
    if (shouldPersist && !id) {
        throw new Error(
            "Please provide a unique element identifier as shouldPersist is enabled"
        );
    }

    return (
        <input
      type="checkbox"
      id={id}
      className={class_name}
      defaultChecked={lsUtils.isChecked(id)}
      onChange={(e) =>
        shouldPersist && lsUtils.updateChecked(id, e.target.checked)
      }
    />
    );
}