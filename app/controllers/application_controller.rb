class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?, :require_login, :require_logout

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def target_server
    @target_server ||= Server.find_by(id: params[:id])
  end

  def target_membership 
    @target_membership ||= Membership.find_by(id: params[:id])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_login
    if !logged_in?
      render json: ["You must be logged in"], status: 403
    end
  end

  def require_logout
    if logged_in?
      render json: ["You must be logged out"], status: 403
    end
  end

  def protected
    current_user
    unless logged_in? && @current_user.id.to_s == params[:id]
      render json: ["You can't do that"], status: 403
    end
  end

  def protected_server
    current_user
    target_server

    if !target_server
      render json: ["server not found"], status: 404 and return
    end

    unless (target_server) && (logged_in?) && (@current_user == @target_server.owner)
      render json: ["You can't do that"], status: 403
    end
  end

  def protected_membership
    current_user
    target_membership

    if !target_membership
      render json: ["Membership not found"], status: 404 and return
    end

    unless (target_membership) && (logged_in?) && (@current_user == @target_membership.user)
      render json: ["You can't do that"], status: 403
    end
  end
end
