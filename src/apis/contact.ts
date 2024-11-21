import { apiPaths } from '@/constants/apis';
import { extractAxiosData, privateAxios } from '@/libs/baseAxios';
import { ApiResponse } from '@/types/apis';
import { SendMessageRequest, SendMessageResponse } from '@/types/contact';

export const contactApis = {
  sendMessage: async ({ message }: SendMessageRequest) => {
    const response = await extractAxiosData<ApiResponse<SendMessageResponse>>(
      privateAxios.post(apiPaths.contact.sendMessage, { message })
    );

    return response;
  },
} as const;
