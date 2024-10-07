import registerUser from "@/utils/auth/registerUser";
import { NextResponse } from "next/server";

const POST = async (request: Request, response: NextResponse) => {
  const body = await request.json();

  try {
    const data = await registerUser({ ...body });
    return Response.json(data);
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};

export { POST };
